import { useState } from 'react';
import Button from '@mui/material/Button';

export function VacationSidebarContent() {
    return (
        <div style={{ marginTop: '0px' }}>
            {/* <div style={{ backgroundColor: '#6B66FF', padding: '50px', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '40px', color: '#FFFFFF', fontWeight: 'bold' }}>休暇申請（全休）</h2>
            </div> */}

            <div className="bg-indigo-500 p-16 mb-16 text-center py-16">
                <h2 className="text-4xl text-white font-bold">休暇申請（全休）</h2>
            </div>

            {/* <div style={{ padding: '50px', marginTop: '-70px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>日付*</p>
            </div> */}

            <div className="p-10 -mt-70">
                <p className="text-base text-gray-700 font-bold">日付*</p>
                <div className="mt-2 flex items-center border border-gray-300 rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16 text-gray-400 ml-10 mr-3">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <input type="text" className="w-full outline-none px-4 py-2" placeholder="" />
                </div>
                <p className="text-xs font-bold text-gray-500 mt-2">YYYY-MM-DD</p>
            </div>

            {/* <div style={{ padding: '50px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>区分*</p>
            </div> */}
            
            <div className="p-10">
                <p className="text-base text-gray-700 font-bold">区分*</p>
                <div className="border border-gray-300 p-4 mt-4 h-32 rounded-md" id="selectionBox">
                    <span class="pl-6">有給休暇（全休）</span>
                </div>
            </div>

            {/* <div style={{ padding: '50px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>時間</p>
            </div> */}

            <div className="p-10">
                <p className="text-base text-gray-700 font-bold">時間</p>
                <p className="ml-6">8</p>
            </div>

            {/* <div style={{ padding: '20px 50px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>休暇事由 / 備考</p>
                <textarea
                    style={{
                        width: '100%',
                        minHeight: '75px',
                        padding: '10px',
                        fontSize: '14px',
                        border: '1px solid #D5D5D5',
                        borderRadius: '5px'
                    }}
                    placeholder=""
                />
            </div> */}

            <div className="p-6 md:p-10 mb-6">
                <p className="text-base text-gray-700 font-bold">休暇事由 / 備考</p>
                <textarea
                    className="w-full min-h-20 px-4 py-2 text-sm border border-gray-300 rounded"
                    placeholder=""
                />
            </div>

            {/* <button
                style={{
                    fontSize: '14px',
                    padding: '10px 150px',
                    margin: '10px 50px',
                    backgroundColor: '#EAEAEA',
                    color: '#A6A6A6',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '20px'
                }}
                onClick={() => alert('Button clicked!')}
            >
                申請
            </button> */}

            <div className="flex justify-center">
                <Button className="text-base px-10 py-2 mt-4 mb-2 bg-gray-200 text-gray-600 font-bold rounded-full w-full mx-10"
                        onClick={() => alert('Button clicked!')}
                >
                    申請
                </Button>
            </div>

        </div>
    );
}
