// import { Button } from "./button";
// import { Container } from "./container";

import NavBarSecond from "@/app/components/NavBar/NavBarSecond";

export const Header = () => {
  return (
    <>
   <header className="absolute top-0 w-full z-50 px-0 pl">
           <NavBarSecond />
         </header>
      {/* <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div> */}
    </>
  );
};
