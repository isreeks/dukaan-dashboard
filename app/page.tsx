import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return redirect("/payments")
}

export default page