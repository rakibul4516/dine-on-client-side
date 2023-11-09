
const OurArea = () => {
    return (
        <section className="lg:w-11/12 w-full mx-auto pb-10">
            <div className=" mb-11 bg-white dark:bg-gray-900 lg:mx-8 flex lg:flex-row lg:items-center flex-col">
                <div className="lg:w-1/2">
                    <div className=" bg-cover lg:h-full">
                        <img src="https://i.ibb.co/ZN4QSzH/img-04.jpg" alt="" className="rounded-md w-full lg:h-[100vh] h-[60vh] object-cover" />
                    </div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 text-center">
                    <h2 className="text-4xl font-semibold font-[montez] text-gray-800 dark:text-white md:text-4xl">
                        Indoor
                    </h2>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl font-[Suranna]">
                        WARM ATMOSPHERE
                    </h2>

                    <p className="mt-4 text-gray-500 text-xs dark:text-gray-300">
                        Enjoyable and comfortable atmosphere in the heart of London. Royal plate offers 50 seating places, surrounding a big fireplace that will make your dining exquisite and enjoyable. Carefully selected music and smart interior design will make you feel like home. Royal home indoor includes a vine cellar. You can taste any vine from our offering in our vine tasting bar. Royal plate can host large groups too, so if you need more seats for your feast simply send us an email, or call us by phone.
                    </p>
                </div>
            </div>
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 flex lg:flex-row-reverse lg:items-center flex-col">
                <div className="lg:w-1/2">
                    <div className=" bg-cover lg:h-full">
                        <img src="https://i.ibb.co/SccXwdc/img-06.jpg" alt="" className="rounded-md w-full lg:h-[100vh] h-[60vh] object-cover" />
                    </div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 text-center">
                    <h2 className="text-4xl font-semibold text-gray-800 dark:text-white md:text-4xl  font-[montez]">
                        Outdoor
                    </h2>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl font-[Suranna]">
                        NATURAL SURROUNDING
                    </h2>

                    <p className="mt-4 text-gray-500 text-xs dark:text-gray-300">
                        Enjoy your dining at Royal plate terrace, surrounded by natural wooden fence and plenty of green. Royal plate terrace offers 72 seating places which can be rearranged for large groups and special events like weddings, corporate parties or baby showers. Royal view of the Palma bay in the sunset will take your breath away and make your stay truly royal. You can also visit our terrace bar where our professional staff will offer you our best vines or cocktails, according to your wishes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurArea;