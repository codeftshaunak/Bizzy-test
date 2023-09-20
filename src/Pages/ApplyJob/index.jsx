import React, { useState } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import JobDetails from '../../Components/JobDetails/JobDetails'
import JobApply from '../../Components/JobDetails/JobApply'

const ApplyJob = () => {
    const [page, setPage] = useState(1)
    return (
        <HomeLayout>
            {
                page === 1 && <JobDetails setPage={setPage} />
            }{
                page === 2 && <JobApply setPage={setPage} />

            }
        </HomeLayout>
    )
}

export default ApplyJob
