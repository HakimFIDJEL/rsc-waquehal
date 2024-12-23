import React, { useState, useRef } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"




const ImageUploader = ({ images, setImages, limit, deleteUrl  }) => {

  
  

  const ImageContainerRef = useRef(null);

  if(limit == null) {
    limit = 5;
    }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

      
      const newImage = {
        url: URL.createObjectURL(file),
        file: file,
        preloaded: false
      };
      setImages([newImage, ...images]);
      

    }

  };

  const handleDeleteImage = (index) => {

    if(images[index].preloaded) {
      // ajax call to delete image from server
      fetch(deleteUrl + images[index].id
        , {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        },
        body: JSON.stringify({ id: images[index].id }),
      })


    }

    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div 
      className={`grid gap-2 ${limit === 1 ? '' : 'grid-cols-3'}`} 
      ref={ImageContainerRef} 
      style={limit === 1 ? {} : { gridTemplateColumns: 'repeat(3,minmax(0,1fr))' }}
    >
      {images.map((image, index) => (
        <div key={index} className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span className="flex aspect-square w-full items-center justify-center cursor-pointer" style={{ aspectRatio: '1/1' }}>
                    <img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <AlertDialog>
                    <AlertDialogTrigger >
                        <p className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer'>
                            Aperçu
                        </p>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogDescription asChild>
                            <img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Fermer</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <p className='cursor-pointer' onClick={() => handleDeleteImage(index)}>
                    Supprimer
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}

      {(limit - 1) >= images.length && (
        <>
            <Label htmlFor="image">
                <span className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer" style={{ aspectRatio: '1/1' }}>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Upload</span>
                </span>
            </Label>
            <Input
                id="image"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
            />
        </>
      )}
    </div>
  );
};

export default ImageUploader;
