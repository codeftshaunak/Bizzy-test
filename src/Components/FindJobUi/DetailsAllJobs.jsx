import React from 'react'

const DetailsAllJobs = () => {
    return (
        <div>
            <div className="py-6 px-8 flex">
                <div className="w-[75%]">
                    <div className="flex justify-between">
                        <div className="border border-tertiary w-[32%] h-[88px] rounded-2xl flex items-center gap-4 p-4">
                            <img src="images/dashboard/proposals.png" alt="proposals" />
                            <div>
                                <div className="text-sm font-semibold">My Proposals</div>
                                <div className="text-sm text-gray-300">Review your proposals, offers and client invitations.</div>
                            </div>
                        </div>
                        <div className="border border-tertiary w-[32%] h-[88px] rounded-2xl flex items-center gap-4 p-4">
                            <img src="images/dashboard/stats.png" alt="proposals" />
                            <div>
                                <div className="text-sm font-semibold">My Stats</div>
                                <div className="text-sm text-gray-300">Analyze your performance to improve your success.</div>
                            </div>
                        </div>
                        <div className="border border-tertiary w-[32%] h-[88px] rounded-2xl flex items-center gap-4 p-4">
                            <img src="images/dashboard/jobs.png" alt="proposals" />
                            <div>
                                <div className="text-sm font-semibold">My Jobs</div>
                                <div className="text-sm text-gray-300">View your active contracts, timesheets, and earnings.</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold mt-4">Here are jobs for you.</div>
                    <div className="flex gap-6 px-6 mt-4">
                        <div className="text-sm font-medium text-primary border-b-2 border-primary p-2">Best Matches</div>
                        <div className="text-sm font-medium text-gray-300 p-2">Most Recent Jobs</div>
                    </div>
                    <div className="border border-tertiary rounded-2xl overflow-auto">
                        <div className="p-4 border-b border-tertiary bg-gray-100">
                            <div className="text-gray-300 text-sm">Fixed-price / Intermediate / Est. Budget: $100 / Posted 10 hours ago</div>
                            <div className="text-base font-semibold text-green-700 mt-2 mb-2">Update our site design with a figma</div>
                            <div className="text-gray-300 text-sm">Seeking a talented UX/UI designer to refine and optimize our existing platform's user experience and visuals. Previous experience preferred. Share your portfolio</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium text-gray-400">5.0 300K+ Spent / United States</div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-tertiary">
                            <div className="text-gray-300 text-sm">Fixed-price / Intermediate / Est. Budget: $100 / Posted 10 hours ago</div>
                            <div className="text-base font-semibold mt-2 mb-2">Update our site design with a figma</div>
                            <div className="text-gray-300 text-sm">Seeking a talented UX/UI designer to refine and optimize our existing platform's user experience and visuals. Previous experience preferred. Share your portfolio</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium text-gray-400">5.0 300K+ Spent / United States</div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-tertiary">
                            <div className="text-gray-300 text-sm">Fixed-price / Intermediate / Est. Budget: $100 / Posted 10 hours ago</div>
                            <div className="text-base font-semibold mt-2 mb-2">Update our site design with a figma</div>
                            <div className="text-gray-300 text-sm">Seeking a talented UX/UI designer to refine and optimize our existing platform's user experience and visuals. Previous experience preferred. Share your portfolio</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium text-gray-400">5.0 300K+ Spent / United States</div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-tertiary">
                            <div className="text-gray-300 text-sm">Fixed-price / Intermediate / Est. Budget: $100 / Posted 10 hours ago</div>
                            <div className="text-base font-semibold mt-2 mb-2">Update our site design with a figma</div>
                            <div className="text-gray-300 text-sm">Seeking a talented UX/UI designer to refine and optimize our existing platform's user experience and visuals. Previous experience preferred. Share your portfolio</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium text-gray-400">5.0 300K+ Spent / United States</div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="text-gray-300 text-sm">Fixed-price / Intermediate / Est. Budget: $100 / Posted 10 hours ago</div>
                            <div className="text-base font-semibold mt-2 mb-2">Update our site design with a figma</div>
                            <div className="text-gray-300 text-sm">Seeking a talented UX/UI designer to refine and optimize our existing platform's user experience and visuals. Previous experience preferred. Share your portfolio</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium text-gray-400">5.0 300K+ Spent / United States</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] pl-6">
                    <div className="h-[296px] border border-tertiary rounded-2xl">
                        <div className="flex flex-col items-center gap-1 pt-6 pb-4 border-b border-tertiary">
                            <img src="images/user.jpeg" alt="avatar" className="h-[90px] w-[90px] rounded-full border-4 border-tertiary" />
                            <div className="text-2xl font-medium">Sasheen M.</div>
                            <div className="text-sm text-gray-300">Customer Experience Consultant</div>
                            <div class="flex items-center">
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div class="star-filled"></div>
                                <div className="text-sm font-medium">5.0 of 4 Reviews</div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="text-sm text-gray-400">Complete your Profile</div>
                            <div className="flex gap-4 items-center mt-3">
                                <div className="w-[80%] h-[5px] bg-green-600 rounded-2xl"></div>
                                <div className="text-xs font-semibold">100%</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 relative">
                        <img className="w-full" src="images/dashboard/banner.png" alt="banner" />
                        <div className="flex flex-col gap-3 absolute bottom-3 left-3">
                            <div className="text-3xl text-secondary font-bold">Get Discount</div>
                            <div className="text-sm text-secondary">Analyze your performance to improve your success</div>
                            <button className="bg-primary text-secondary rounded h-[36px] w-[90px]">Let's Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsAllJobs
