export const scrollTo = (id:string) => {
   const section = document.querySelector(`#${id}`);
   if(!section){
       return
   }
   section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};