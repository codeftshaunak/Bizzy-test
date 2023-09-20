import React from 'react'

const JobApply = () => {
    return (
        <div>
            <div className="py-2 px-40">
                <div className="flex gap-2 py-6">
                    <img src="icons/home.svg" alt="home" />
                    <img src="icons/chevron-right.svg" alt="arrow right" />
                    <div>Update our site design with a figma</div>
                    <img src="icons/chevron-right.svg" alt="arrow right" />
                    <div>Submit Proposal</div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[49%] border border-tertiary rounded-2xl p-6 max-h-[700px]">
                        <div className="font-semibold">Job details</div>
                        <br />
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
                    <div className="w-[49%]">
                        <div className="border border-tertiary rounded-2xl p-6 mb-4">
                            <div className="font-semibold mb-2">How do you want to be paid?</div>
                            <div className="flex rounded-2xl border border-tertiary p-4 gap-3 mt-4">
                                <input type="radio" />
                                <label className="text-base font-medium">By Milestone</label>
                            </div>
                            <div className="flex rounded-2xl border-2 border-green-600 p-4 gap-3 mt-4">
                                <input checked type="radio" className="checked:accent-green-600" />
                                <label className="text-base font-medium">By Project</label>
                            </div>
                            <div className="mt-4">What is the full amount you'd like to bid for this job?</div>
                            <input className="rounded-md border border-tertiary p-1 w-full" type="text" placeholder="$100.00" />
                            <div className="flex justify-between mt-4">
                                <div className="font-semibold">10% Freelancer Service Fee</div>
                                <div className="font-semibold">-$10.00</div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <div className="font-semibold">You'll Receive</div>
                                <div className="font-semibold">$90.00</div>
                            </div>
                        </div>
                        <div className="border border-tertiary rounded-2xl p-6">
                            <div className="font-semibold mb-2">Additional details</div>
                            <div>Cover Letter</div>
                            <textarea rows="10" className="border border-tertiary w-full rounded"></textarea>
                            <div className="text-right text-gray-300">(0/500)</div>
                            <div className="font-semibold mt-4">Attachments</div>
                            <div class="max-w-xl">
                                <label
                                    class="flex justify-center w-full h-20 px-4 transition bg-green-200 border-2 border-green-600 border-dashed rounded-md appearance-none cursor-pointer">
                                    <span class="flex items-center space-x-2">
                                        <span>
                                            Drag or&nbsp;
                                            <span class="text-green-600 underline">upload</span>
                                            &nbsp;project files
                                        </span>
                                    </span>
                                    <input type="file" name="file_upload" class="hidden" />
                                </label>
                            </div>
                            <button className="bg-primary text-secondary rounded h-[36px] px-4 mt-4">Submit Proposal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobApply
