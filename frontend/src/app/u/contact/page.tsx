import React from 'react';

import { Input } from '@/components/forms/Input';
import { Button } from '@/components/forms/Button';

import { ActivityCard } from '@/components/elements/ActivityCard';
import { Arrow } from '@/components/elements/Arrow';

import  Carousel  from '@/components/elements/Carousel';

export default function Contact()
{
    const contactSwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 3,

        grid: {
            rows: 2,
            fill: 'row',
        },
        
        breakpoints: {
            0: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            },
        },

        // navigation
        navigation: {
            nextEl: '.activities .activities__arrows__buttons .arrow.right',
            prevEl: '.activities .activities__arrows__buttons .arrow.left',
        },

        // pagination
        pagination: {
            el: '.activities .activities__arrows__buttons .buttons__container',
            clickable: true,
        },
    };


    return <main className="contact">
        <section className="hero section">
            <div className="hero__container">
                <div className="hero__content">
                <div className="hero__content__title fade-in-up">LES MATCHS</div>
                <div className="hero__content__description fade-in-up">L’archive de nos matchs passés et à venir.</div>
                </div>
                <div className="hero__cover"></div>
            </div>
        </section>

        <section className="section contact">
            <div className="container">

                
                    <div className="bento__socials">
                        
                        <a title="Instagram" href="" className="social">
                            <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7729 0.909424C29.4977 0.91669 30.8808 0.931223 32.0749 0.965132L32.5447 0.982087C33.0873 1.00146 33.6226 1.02568 34.2693 1.05475C36.8464 1.17585 38.6048 1.58277 40.1477 2.18103C41.7463 2.79624 43.093 3.62944 44.4397 4.97371C45.6713 6.18451 46.6243 7.64914 47.2324 9.26567C47.8306 10.8086 48.2375 12.567 48.3586 15.1465C48.3877 15.7908 48.4119 16.3261 48.4313 16.8711L48.4458 17.341C48.4822 18.5326 48.4967 19.9157 48.5016 22.6405L48.504 24.4474V27.6204C48.5099 29.3871 48.4913 31.1537 48.4483 32.9199L48.4337 33.3898C48.4144 33.9348 48.3901 34.4701 48.3611 35.1143C48.24 37.6939 47.8282 39.4499 47.2324 40.9952C46.6261 42.6126 45.6728 44.0776 44.4397 45.2872C43.2285 46.5184 41.764 47.4713 40.1477 48.0799C38.6048 48.6781 36.8464 49.085 34.2693 49.2061C33.6946 49.2332 33.1197 49.2574 32.5447 49.2788L32.0749 49.2933C30.8808 49.3272 29.4977 49.3442 26.7729 49.349L24.966 49.3515H21.7955C20.028 49.3576 18.2605 49.339 16.4935 49.2957L16.0236 49.2812C15.4486 49.2594 14.8738 49.2344 14.2991 49.2061C11.7219 49.085 9.96349 48.6781 8.41819 48.0799C6.80185 47.4728 5.33781 46.5197 4.12865 45.2872C2.89591 44.0768 1.94204 42.6121 1.33355 40.9952C0.735289 39.4523 0.328375 37.6939 0.20727 35.1143C0.180285 34.5396 0.156064 33.9648 0.134607 33.3898L0.122497 32.9199C0.0778628 31.1538 0.0576765 29.3871 0.0619444 27.6204V22.6405C0.0551844 20.8738 0.0729484 19.1072 0.115231 17.341L0.132185 16.8711C0.151562 16.3261 0.175783 15.7908 0.204848 15.1465C0.325954 12.567 0.732866 10.811 1.33113 9.26567C1.93935 7.64748 2.89513 6.1824 4.13107 4.97371C5.33993 3.74201 6.803 2.78894 8.41819 2.18103C9.96349 1.58277 11.7195 1.17585 14.2991 1.05475C14.9433 1.02568 15.481 1.00146 16.0236 0.982087L16.4935 0.967554C18.2597 0.92452 20.0263 0.905949 21.793 0.911846L26.7729 0.909424ZM24.283 13.0199C21.0711 13.0199 17.9907 14.2959 15.7195 16.567C13.4484 18.8382 12.1725 21.9185 12.1725 25.1304C12.1725 28.3423 13.4484 31.4227 15.7195 33.6939C17.9907 35.965 21.0711 37.241 24.283 37.241C27.4949 37.241 30.5752 35.965 32.8464 33.6939C35.1175 31.4227 36.3935 28.3423 36.3935 25.1304C36.3935 21.9185 35.1175 18.8382 32.8464 16.567C30.5752 14.2959 27.4949 13.0199 24.283 13.0199ZM24.283 17.8641C25.2372 17.864 26.1821 18.0518 27.0637 18.4168C27.9454 18.7818 28.7465 19.3169 29.4214 19.9915C30.0962 20.6662 30.6316 21.4671 30.9969 22.3486C31.3622 23.2302 31.5503 24.175 31.5505 25.1292C31.5506 26.0835 31.3628 27.0284 30.9978 27.91C30.6328 28.7917 30.0977 29.5928 29.4231 30.2676C28.7485 30.9425 27.9475 31.4779 27.066 31.8432C26.1845 32.2085 25.2396 32.3966 24.2854 32.3967C22.3582 32.3967 20.51 31.6312 19.1473 30.2685C17.7846 28.9058 17.0191 27.0576 17.0191 25.1304C17.0191 23.2033 17.7846 21.3551 19.1473 19.9924C20.51 18.6297 22.3582 17.8641 24.2854 17.8641M37.0014 9.38678C36.1984 9.38678 35.4283 9.70576 34.8606 10.2736C34.2928 10.8413 33.9738 11.6114 33.9738 12.4144C33.9738 13.2174 34.2928 13.9875 34.8606 14.5553C35.4283 15.1231 36.1984 15.442 37.0014 15.442C37.8044 15.442 38.5745 15.1231 39.1423 14.5553C39.7101 13.9875 40.029 13.2174 40.029 12.4144C40.029 11.6114 39.7101 10.8413 39.1423 10.2736C38.5745 9.70576 37.8044 9.38678 37.0014 9.38678Z" fill="white"/>
                            </svg>
                        </a>
                        <a title="Youtube" href="" className="social">
                            <svg width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6122 24.3967L32.1829 17.1304L19.6122 9.86413V24.3967ZM47.6117 5.43168C47.9265 6.57007 48.1445 8.09599 48.2898 10.0337C48.4594 11.9714 48.5321 13.6426 48.5321 15.0959L48.6774 17.1304C48.6774 22.4348 48.2898 26.3344 47.6117 28.8292C47.0061 31.0091 45.6013 32.4139 43.4214 33.0194C42.283 33.3343 40.2 33.5523 37.0029 33.6976C33.8541 33.8672 30.9718 33.9398 28.3075 33.9398L24.4564 34.0851C14.3078 34.0851 7.98608 33.6976 5.49131 33.0194C3.31142 32.4139 1.9066 31.0091 1.30108 28.8292C0.986203 27.6908 0.768214 26.1649 0.622888 24.2272C0.453341 22.2895 0.380678 20.6183 0.380678 19.165L0.235352 17.1304C0.235352 11.826 0.622888 7.92645 1.30108 5.43168C1.9066 3.25179 3.31142 1.84697 5.49131 1.24145C6.6297 0.926572 8.71271 0.708582 11.9099 0.563256C15.0586 0.393709 17.9409 0.321046 20.6052 0.321046L24.4564 0.17572C34.605 0.17572 40.9267 0.563257 43.4214 1.24145C45.6013 1.84697 47.0061 3.25179 47.6117 5.43168Z" fill="white"/>
                            </svg>
                        </a>
                        <a title="Mail" href="" className="social">
                            <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.5036 9.1853V32.1105C48.5037 33.9639 47.7955 35.7473 46.524 37.0958C45.2525 38.4443 43.5138 39.256 41.6635 39.3647L41.2372 39.3768H7.32783C5.47441 39.3769 3.69101 38.6688 2.34251 37.3973C0.994016 36.1258 0.182368 34.387 0.0736342 32.5368L0.0615234 32.1105V9.1853L22.9383 24.4373L23.2192 24.5971C23.5504 24.7589 23.914 24.843 24.2825 24.843C24.6511 24.843 25.0147 24.7589 25.3458 24.5971L25.6268 24.4373L48.5036 9.1853Z" fill="white"/>
                                <path d="M41.2375 0.623169C43.8534 0.623169 46.1471 2.00377 47.426 4.07951L24.2828 19.5083L1.13965 4.07951C1.74694 3.09315 2.58132 2.26633 3.57315 1.66802C4.56499 1.06972 5.68553 0.717283 6.84128 0.640124L7.32812 0.623169H41.2375Z" fill="white"/>
                            </svg>
                        </a>
                        <a title="Facebook" href="" className="social">
                            <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3014 28.6332H23.3566L25.7787 18.9448H17.3014V14.1005C17.3014 11.6058 17.3014 9.25635 22.1456 9.25635H25.7787V1.11809C24.9891 1.01394 22.0075 0.778992 18.8588 0.778992C12.2828 0.778992 7.61298 4.79241 7.61298 12.1629V18.9448H0.34668V28.6332H7.61298V49.221H17.3014V28.6332Z" fill="white"/>
                            </svg>
                        </a>
                        <a title="Phone" href="" className="social">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.149 33.8244L36.2181 29.7553C36.7662 29.214 37.4596 28.8435 38.2142 28.6887C38.9688 28.534 39.752 28.6016 40.4689 28.8833L45.4282 30.8634C46.1526 31.1575 46.7738 31.6594 47.2135 32.306C47.6532 32.9525 47.8916 33.7147 47.8987 34.4966V43.5794C47.8945 44.1113 47.7827 44.6368 47.57 45.1243C47.3574 45.6118 47.0483 46.0512 46.6613 46.4161C46.2744 46.781 45.8176 47.0639 45.3184 47.2476C44.8193 47.4313 44.2881 47.5121 43.7569 47.4851C9.00583 45.3234 1.99385 15.8948 0.667747 4.63205C0.606188 4.07897 0.662433 3.51912 0.83278 2.98934C1.00313 2.45956 1.28371 1.97184 1.65609 1.55829C2.02846 1.14473 2.48417 0.814707 2.99325 0.589922C3.50233 0.365137 4.05323 0.250687 4.60972 0.254103H13.3838C14.1667 0.25642 14.9311 0.492923 15.5786 0.933192C16.226 1.37346 16.7269 1.99736 17.0169 2.72465L18.997 7.6839C19.2881 8.39794 19.3624 9.18192 19.2105 9.93793C19.0587 10.6939 18.6875 11.3884 18.1432 11.9347L14.0741 16.0038C14.0741 16.0038 16.4175 31.8625 32.149 33.8244Z" fill="white"/>
                            </svg>
                        </a>
                        <a title="Dossier d'inscription" href="" className="social inscription">
                            Dossier d'inscription
                        </a>
                    </div>
                

                <div className="form__container">
                    <div className="title__wrapper">
                        <div className="title__bar"></div>
                        <h1>Nous contacter</h1>
                    </div>

                    <form action="" className="">
                        <div className="input__group">
                            <Input 
                                type="text"
                                name="name"
                                label="Votre nom"
                            />
                        </div>
                        <div className="input__group">
                            <Input 
                                type="text"
                                name="mail"
                                label="Votre adresse mail"
                            />

                        </div>
                        <div className="input__group">
                            <Input 
                                type="textarea"
                                name="content"
                                label="Votre message"
                            />
                        </div>

                        <span>
                            <Button 
                                className="btn secondary-button"
                            >
                                Envoyer
                            </Button>
                        </span>
                    </form>

                </div>
            </div>
        </section>

        <section className="section map">
            <div className="container">

            </div>
        </section>


    

        <section className="section activities">
            <div className="container">
                <div className="activities__title__wrapper">
                    <div className="title">
                    <div className="title__bar"></div>
                    <h1>Les activités aux alentours</h1>
                    </div>  
        
                    <form className="select__container" method="GET" action="">
                    <span>Voir tout</span>
                    <ul className="">
                        <li>Actu 1</li>
                        <li>Actu 2</li>
                        <li>Actu 3</li>
                    </ul>
                    <Button 
                        className="btn secondary-button"
                        type="submit"
                    >
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M9.96875 1.27508C9.96875 1.06463 9.86376 0.862787 9.67687 0.713972C9.48999 0.565157 9.23652 0.481552 8.97222 0.481552C8.70793 0.481552 8.45446 0.565157 8.26757 0.713972C8.08069 0.862787 7.9757 1.06463 7.9757 1.27508H9.96875ZM7.9757 1.27508L7.9757 18.2037H9.96875L9.96875 1.27508H7.9757Z" fill="white"/>
                            <path d="M0.999907 11.8555L8.97212 18.2037L16.9443 11.8555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </Button>

        
                    </form>
        
                </div>


                <div className="activities__content__wrapper">



                <div className="activities__wrapper" id="activites__slick__carroussel">


                        <Carousel options={contactSwiperOptions}>
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />

             





                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                            <ActivityCard 
                                imgSrc=""
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. la suite c'est ici ! Ah apparemment il n'ya pas assez de texte, quel dommage !!"
                                subtitle="Hôtel"
                            />
                    
                        </Carousel>



                

                </div>

                <div className="activities__arrows__buttons">
                    <Arrow direction="left" />

                    <div className="buttons__container">

                    </div>

                    <Arrow direction="right" />

                    
                </div>



                </div>

            </div>
        </section>
    </main>
}