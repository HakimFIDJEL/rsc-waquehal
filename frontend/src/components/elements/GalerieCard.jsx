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

export function GalerieCard({src, date, description})
{
    const formatDate = (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`;
    }

    return <>
    
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="gallerie__wrapper">
          <div className="gallerie">
            <div className="gallerie__infos">
              <img src={src} alt="" className="gallerie__image" />
              <div className="gallerie__cover">
                <div className="gallerie__cover__content"> { description } </div>
              </div>
            </div>
            <div className="gallerie__date">
                { formatDate(date) }
            </div>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            {/* min-width : 500px, use bootstrap class */}
            <img src={src} alt="" className="gallerie__image w-full h-full" />
            <div className="gallerie__cover mt-4">
              <div className="gallerie__cover__content"> { description } </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Fermer
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

      
    
    </>
}