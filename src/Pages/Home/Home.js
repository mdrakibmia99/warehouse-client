import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ProductCart from '../ProductCart/ProductCart';

const Home = () => {
    const navigate = useNavigate();
    const featuresForTechnicalSpecifications = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ];
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products);

    const features = [
        {
            name: 'Competitive exchange rates',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            icon: GlobeAltIcon,
        },
        {
            name: 'No hidden fees',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            icon: ScaleIcon,
        },
        {
            name: 'Transfers are instant',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            icon: LightningBoltIcon,
        },
        {
            name: 'Mobile notifications',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            icon: AnnotationIcon,
        },
    ]

    return (
        <div>
            {/* banner */}
            <div className="py-12 overflow-y-hidden">
                <dh-component>
                    <div className="w-full px-6">
                        <div className="mt-8 relative rounded-lg bg-[#4a413d] container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                            <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                            <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Powerful people come from powerfull place!</h1>
                            </div>
                            <div className="flex justify-center items-center mb-8">
                                <button onClick={() => navigate('/addItems')} className="hover:text-black hover:bg-transparent lg:text-xl  hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                                <button onClick={() => navigate('/blog')} className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                            </div>
                            <p className='text-white text-center'>If you think you are bad then I'm your dad!</p>
                        </div>
                        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                            <div className="relative sm:w-2/3 w-11/12">
                                <img src="https://garryblack.com/blog/wp-content/uploads/2011/10/Ottawa_Model_Workshop11.jpg" alt="Sample Page" className='rounded-lg' />
                            </div>
                        </div>
                    </div>
                </dh-component>
            </div>
            



            {/* product section  */}
            <section className=' py-5 bg-gray-100 '>
               <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 container gap-5'>
               {products.slice(0,6).map(product => <ProductCart
                  key={product._id}
                   product={product}
                   ></ProductCart>
               )}
               </div>
            </section>
               





          {/* section  */}
            <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications for our work</h2>
                            <p className="mt-4 text-gray-500">
                                The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                                steel divider separates active cards from new ones, or can be used to archive important task lists.
                            </p>

                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {featuresForTechnicalSpecifications.map((feature) => (
                                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                alt="Side of walnut card tray with card groove and recessed card area."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="bg-gray-100 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* marketing */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;