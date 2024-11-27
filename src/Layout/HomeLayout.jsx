import BrandPreviwe from "../Components/BrandPreviwe";
import Hero from "../Components/Hero";
import Navber from "../Components/Navber";



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
                <section>
                    <BrandPreviwe></BrandPreviwe>
                </section>
            </header>
            <main>
               
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;