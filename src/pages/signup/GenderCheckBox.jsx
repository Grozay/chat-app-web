import { useState } from 'react'
const GenderCheckBox = () => {
    const [gender, setGender] = useState('male')
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input type="radio" name='gender' value='male' className='radio radio-primary' 
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input type="radio" name='gender' value='female' className='radio radio-primary'
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckBox