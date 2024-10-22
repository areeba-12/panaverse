import Image from "next/image";

import CoreTracks from "@/app/components/sections/CoreTracks"
import Hero from "@/app/components/sections/Hero"
import Outcome from "@/app/components/sections/Outcome"
import SpecializedTracks from "@/app/components/sections/SpecializedTracks"


export default function Home() {
  return (<>
  <main>

    {/* Hero section */}
    <Hero/>
    {/* Core Tracks Section */}
    <CoreTracks/>
    {/* Specialized Tracks */}
    <SpecializedTracks/>
    {/* outcome tracks */}
    <Outcome/>
    
  </main>


     </>
  )
}