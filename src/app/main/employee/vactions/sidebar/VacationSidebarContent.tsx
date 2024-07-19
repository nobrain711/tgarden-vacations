// tailwind의 경우에는 style에 정의 하는게 아니라 className에 정의 하면 됩니다.
export function VacationSidebarContent() {
    return (
        <div style={{ marginTop: '0px' }}>
            <div style={{ backgroundColor: '#6B66FF', padding: '50px', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '40px', color: '#FFFFFF', fontWeight: 'bold' }}>休暇申請（全休）</h2>
            </div>

            <div className="bg-sky-600 p-12 mb-12">
                <h2 className="text-4xl text-white font-[700]">休暇申請（全休）</h2>
            </div>

            <div style={{ padding: '50px', marginTop: '-70px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>日付*</p>
            </div>

            <div style={{ padding: '50px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>区分*</p>
            </div>

            <div style={{ padding: '50px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>時間</p>
            </div>

            <div style={{ padding: '20px 50px' }}>
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
            </div>

            <button
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
            </button>
        </div>
    );
}
