import React from 'react'

const JobDetails = () => {
    return (
        <div>
            <div className="py-2 px-40">
                <div className="flex gap-2 py-6">
                    <img src="icons/home.svg" alt="home" />
                    <img src="icons/chevron-right.svg" alt="arrow right" />
                    <div>Update our site design with a figma</div>
                </div>
                <div className="w-full border border-tertiary rounded-2xl p-6 mb-4">
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col gap-2'>
                            <div className='flex'>
                                <div className="font-semibold mr-2">Update our site design with a figma </div>
                                <div className="text-gray-300">Posted 2mins ago</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex gap-2"><img src="icons/receipt.svg" alt="receipt" /> <div className='text-gray-300'>$100.00</div></div>
                                <div className="flex gap-2"><img src="icons/user.svg" alt="user" /> <div className='text-gray-300'>Expert</div></div>
                            </div>
                        </div>
                        <button className="bg-primary text-secondary rounded h-[36px] px-4">Apply for this Job</button>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[68%] border border-tertiary rounded-2xl p-6">
                        We have a fully functional website with all the features in place.
                        Now, we're looking for a talented Logo and UI Designer to enhance the website's visual appeal and user-friendliness.
                        <br />
                        <br />
                        Responsibilities:
                        <br />
                        <br />
                        - Design a modern and visually appealing logo that aligns with our brand identity.
                        - Create a user-friendly and modern UI design in Figma, providing clear instructions for implementation.
                        - Ensure that the UI design is responsive and compatible with various devices.
                        <br />
                        <br />
                        Requirements:
                        <br />
                        <br />
                        - Proven experience in logo design and UI/UX design.
                        - Proficiency in Figma or similar design tools.
                        - Strong understanding of modern design principles and trends.
                        <br />
                        <br />
                        Additional Information:
                        <br />
                        <br />
                        - This is not a coding job; the website and its features are already developed.
                        - You will be responsible for the visual aspects and user experience improvements.
                    </div>
                    <div className="w-[30%] border border-tertiary rounded-2xl p-6">
                        <div className="font-semibold mb2">About the client</div>
                        <div className="font-semibold">Payment method verified</div>
                        <div class="flex items-center mb-4">
                            <div class="star-filled"></div>
                            <div class="star-filled"></div>
                            <div class="star-filled"></div>
                            <div class="star-filled"></div>
                            <div class="star-filled"></div>
                            5.0 of 30 reviews
                        </div>
                        <div className="font-semibold">United States</div>
                        <div className="mb-4">1:18 am</div>
                        <div className="font-semibold">6 jobs posted</div>
                        <div className="mb-4">50% hire rate, 1 open job</div>
                        <div className="font-semibold">$6.3K total spent</div>
                        <div className="mb-4">1 hire, 1 active</div>
                        <div className="font-semibold">1 hire, 1 active</div>
                        <div>298 hours</div>
                    </div>
                </div>
                <div className="w-[68%] border border-tertiary rounded-2xl mt-4">
                    <div className="font-semibold p-6">Clients History</div>
                    <div className="border-b border-tertiary px-6 mb-4">
                        <div className="font-semibold">Update our site design with a figma</div>
                        <div className='text-gray-200'>Job in progress</div>
                        <div className="w-full flex justify-between mb-4">
                            <div className='text-gray-300'>Budget: $100</div>
                            <div className='text-gray-300'>298 hrs @ $20.00</div>
                        </div>
                    </div>
                    <div className="border-b border-tertiary px-6">
                        <div className="font-semibold mt-4">Update our site design with a figma</div>
                        <div className='text-gray-200'>Job in progress</div>
                        <div className="w-full flex justify-between mb-4">
                            <div className='text-gray-300'>Budget: $100</div>
                            <div className='text-gray-300'>298 hrs @ $20.00</div>
                        </div>
                    </div>
                    <div className="px-6">
                        <div className="font-semibold mt-4">Update our site design with a figma</div>
                        <div className='text-gray-200'>Job in progress</div>
                        <div className="w-full flex justify-between mb-4">
                            <div className='text-gray-300'>Budget: $100</div>
                            <div className='text-gray-300'>298 hrs @ $20.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
