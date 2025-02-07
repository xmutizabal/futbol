import { useState } from 'react'
import {supabase} from '../../lib/supabase'

function Login2() {
    const [email, setEmail]=useState("")


    return (
    <div>
        <form>
            <input type="email" name="email" placeholder="Ingresa Email" onChange={(e) => setEmail (e.target.value)}>
            
            </input>
        </form>
    </div>
  )
}

export default Login2