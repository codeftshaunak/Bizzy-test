import React from 'react'

function Step({ step, description, active, finalStep, complete }) {
    return (
        <div className='flex relative mb-[55px]'>
            <div
                className={`w-8 h-8 rounded-full border-2 ${active ? 'border-outline-active' : 'border-fg-disabled'
                    } ${complete ? 'border-outline-active bg-outline-active' : ''
                    } flex justify-center items-center`}
            >
                {active && <div className='w-2.5 h-2.5 bg-green-500 rounded-full' />}
                {complete && (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <g id='Icons/24px/Check'>
                            <path
                                id='Path'
                                d='M5 12L10 17L20 7'
                                stroke='white'
                                stroke-width='1.75'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </g>
                    </svg>
                )}
            </div>
            <div className='ml-2'>
                <div className=" text-green-600 text-sm font-medium font-['SF Pro Text'] leading-tight">
                    Step {step}
                </div>
                <div className="text-gray-700 text-sm font-medium font-['SF Pro Text'] leading-tight">
                    {description}
                </div>
            </div>
            {!finalStep && (
                <div
                    className={`h-[58px] w-0.5 absolute top-8 left-[15px] ${complete ? 'bg-outline-active' : 'bg-gray-300'
                        }`}
                />
            )}
        </div>
    )
}

function SecondStep() {
    return (
        <>
            <div className='flex mt-16 max-w-screen-xl mx-auto justify-between'>
                <div className='w-[169px] h-[261px] flex-col justify-start items-start inline-flex'>
                    <Step step={1} description={'Basic Information'} complete />
                    <Step step={2} description={'Experience'} active />
                    <Step step={3} description={'Scope of your Work'} finalStep />
                </div>
                <div className='w-[530px] h-[716px] flex-col justify-start items-start gap-9 inline-flex'>
                    <div>
                        <div className="w-max-[440px] text-black text-3xl font-medium font-['SF Pro Text'] leading-9">
                            What level experience you need?
                        </div>
                        <div className="w-max-[530px] mt-2 text-gray-700 text-sm font-normal font-['SF Pro Text'] leading-tight">
                            This won`t restrict any proposals, but helps match expertise to
                            your budget.
                        </div>
                    </div>

                    <div className='flex p-5 items-center border border-outline-primary w-[446px] h-[88px] rounded-xl'>
                        <input
                            id='default-radio-1'
                            type='radio'
                            value=''
                            name='default-radio'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                        />
                        <label for='default-radio-1' className='ml-4'>
                            <div className="w-[375px] text-stone-900 text-lg font-semibold font-['SF Pro Text'] leading-7">
                                Entry
                            </div>
                            <div className="w-[375px] text-neutral-500 text-sm font-normal font-['SF Pro Text'] leading-tight">
                                Looking somerelatively new to this field
                            </div>
                        </label>
                    </div>

                    <div className='flex p-5 items-center border border-outline-primary w-[446px] h-[88px] rounded-xl'>
                        <input
                            id='default-radio-1'
                            type='radio'
                            value=''
                            name='default-radio'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                        />
                        <label for='default-radio-1' className='ml-4'>
                            <div className="w-[375px] text-stone-900 text-lg font-semibold font-['SF Pro Text'] leading-7">
                                Intermediate
                            </div>
                            <div className="w-[375px] text-neutral-500 text-sm font-normal font-['SF Pro Text'] leading-tight">
                                Looking some relatively good in this field
                            </div>
                        </label>
                    </div>

                    <div className='flex bg-bg-success p-5 items-center border-2 border-outline-active w-[446px] h-[88px] rounded-xl'>
                        <input
                            checked
                            id='default-radio-1'
                            type='radio'
                            value=''
                            name='default-radio'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                        />
                        <label for='default-radio-1' className='ml-4'>
                            <div className="w-[375px] text-stone-900 text-lg font-semibold font-['SF Pro Text'] leading-7">
                                Expert
                            </div>
                            <div className="w-[375px] text-neutral-500 text-sm font-normal font-['SF Pro Text'] leading-tight">
                                Looking some relatively expert to this field
                            </div>
                        </label>
                    </div>

                    <button className='w-[136px] h-9 flex-col justify-start items-start gap-2.5 inline-flex'>
                        <div className='self-stretch h-9 px-3 py-2 bg-green-500 rounded-md shadow justify-center items-center gap-1 inline-flex'>
                            <div className="text-center text-white text-sm font-medium font-['SF Pro Text'] leading-tight">
                                Save & Continue
                            </div>
                        </div>
                    </button>
                </div>

                <div className='w-[310px] h-[124px] flex-col justify-start items-start gap-2 inline-flex'>
                    <div className='flex items-center w-full'>
                        <div className="text-gray-700 text-base font-semibold font-['SF Pro Text'] leading-normal">
                            UI/UX Designer
                        </div>
                        <div className='ml-auto'>
                            <div className='w-7 h-7 mr-3 justify-start items-start inline-flex'>
                                <div className='w-7 h-7 p-1 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2.5 flex'>
                                    <div className='w-4 h-4 relative'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            viewBox='0 0 16 16'
                                            fill='none'
                                        >
                                            <g id='16/Pencil'>
                                                <path
                                                    id='Path'
                                                    d='M2.66699 13.3332H5.33366L12.3337 6.33321C13.07 5.59683 13.07 4.40292 12.3337 3.66654C11.5973 2.93016 10.4034 2.93016 9.66699 3.66654L2.66699 10.6665V13.3332'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_2'
                                                    d='M9 4.33301L11.6667 6.99967'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='w-7 h-7 justify-start items-start inline-flex'>
                                <div className='w-7 h-7 p-1 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2.5 flex'>
                                    <div className='w-4 h-4 relative'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            viewBox='0 0 16 16'
                                            fill='none'
                                        >
                                            <g id='16/Trash'>
                                                <path
                                                    id='Path'
                                                    d='M9.33333 7.33301V11.333'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_2'
                                                    d='M6.66634 7.33301V11.333'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_3'
                                                    d='M2.66699 4.66634H13.3337'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_4'
                                                    d='M3.33301 4.66699L3.99967 12.667C3.99967 13.4034 4.59663 14.0003 5.33301 14.0003H10.6663C11.4027 14.0003 11.9997 13.4034 11.9997 12.667L12.6663 4.66699'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_5'
                                                    d='M6 4.66667V2.66667C6 2.29848 6.29848 2 6.66667 2H9.33333C9.70152 2 10 2.29848 10 2.66667V4.66667'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[310px] my-2 text-gray-700 text-sm font-normal font-['SF Pro Text'] leading-tight">
                        In publishing and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form.
                    </div>
                    <div className="w-[310px] text-gray-700 text-sm font-normal font-['SF Pro Text'] leading-tight">
                        $400.00
                    </div>

                    <div className='flex items-center w-full mt-5'>
                        <div className="text-gray-700 text-base font-semibold font-['SF Pro Text'] leading-normal">
                            Expert
                        </div>
                        <div className='ml-auto'>
                            <div className='w-7 h-7 justify-start items-start inline-flex'>
                                <div className='w-7 h-7 p-1 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2.5 flex'>
                                    <div className='w-4 h-4 relative'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            viewBox='0 0 16 16'
                                            fill='none'
                                        >
                                            <g id='16/Pencil'>
                                                <path
                                                    id='Path'
                                                    d='M2.66699 13.3332H5.33366L12.3337 6.33321C13.07 5.59683 13.07 4.40292 12.3337 3.66654C11.5973 2.93016 10.4034 2.93016 9.66699 3.66654L2.66699 10.6665V13.3332'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    id='Path_2'
                                                    d='M9 4.33301L11.6667 6.99967'
                                                    stroke='#6B7280'
                                                    stroke-width='1.25'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondStep;
