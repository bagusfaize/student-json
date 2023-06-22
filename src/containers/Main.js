import React from 'react'
import '../styles/Main.css';
import StudentInput from '../components/StudentInput';

export default function Home() {
  return (
    <div className='App'>
      <div>
        <div>Aplikasi Penilaian Mahasiswa</div>
      </div>
      <div>
        <StudentInput/>
      </div>

    </div>
  )
}
