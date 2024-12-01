
import BrandPreviwe from "../Components/BrandPreviwe";
import Hero from "../Components/Hero";
import Navber from "../Components/Navber";
import PopulerProduct from "../Components/PopulerProduct";



const HomeLayout = () => {
   
    return (
        <div className="rancho-regular">
            <header className="w-full">
                <nav className="bg-header">
                    <div className="mx-auto w-10/12">
                    <Navber></Navber>
                    </div>
                </nav>
                <section>
                    <Hero></Hero>
                </section>
                <section className="bg-[rgb(236,234,227)]">
                    <BrandPreviwe></BrandPreviwe>
                </section>
            </header>
            <main>
               <section>
                    <PopulerProduct></PopulerProduct>
               </section>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;