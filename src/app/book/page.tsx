import CalendarBookTime from "@/components/bookingAva";
import { DATA } from "@/data/resume";

export default function Page() {
    return <div className="absolute left-0 top-0 w-[100vw] h-[100vh] overflow-x-hidden flex justify-center items-center mb-4">
        <CalendarBookTime url={DATA.calendarBookingURL} className="w-full h-full overflow-x-hidden"/>
    </div>
}