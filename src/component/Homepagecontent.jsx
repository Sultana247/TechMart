import React from 'react';

const Homepagecontent = () => {
    const today = new Date();
    const todayName = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday"];
    const currentMonth =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <div className='mt-25'>
            <div className='max-w-6xl mx-auto rounded-4xl shadow-sm text-center p-5'>
                <p>{todayName[today.getDay()]}, {today.getDate() } {currentMonth[today.getMonth()]}</p>

            </div>
        </div>
    );
};

export default Homepagecontent;