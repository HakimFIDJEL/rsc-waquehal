"use client";
export function Arrow({ direction, ...props })
{
    return <div className={`arrow ${direction}`} {...props}>
        {direction === 'left' && 
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path-fill" opacity="0.5" d="M22.2591 9.96875C22.5234 9.96875 22.7769 9.86376 22.9638 9.67687C23.1507 9.48999 23.2556 9.23652 23.2556 8.97222C23.2556 8.70793 23.1507 8.45446 22.9638 8.26757C22.7769 8.08069 22.5234 7.9757 22.2591 7.9757V9.96875ZM22.2591 7.9757L0.999878 7.9757L0.999878 9.96875L22.2591 9.96875V7.9757Z" fill="white"/>
            <path className="path-stroke" d="M8.97209 1.00003L0.999878 8.97224L8.97209 16.9445" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {direction === 'right' &&
            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path-fill" opacity="0.5" d="M0.996498 7.97571C0.732203 7.97571 0.478731 8.0807 0.291847 8.26758C0.104961 8.45447 -2.86102e-05 8.70794 -2.86102e-05 8.97223C-2.86102e-05 9.23653 0.104961 9.49 0.291847 9.67689C0.478731 9.86377 0.732203 9.96876 0.996498 9.96876V7.97571ZM0.996498 9.96876L22.2557 9.96876V7.97571L0.996498 7.97571V9.96876Z" fill="white"/>
            <path className="path-stroke" d="M14.2835 16.9444L22.2557 8.97221L14.2835 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
  </div>
}