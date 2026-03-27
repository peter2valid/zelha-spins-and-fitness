import { timetable } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

export function Timetable() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading title="Class Timetable" description="A weekly structure that balances spin, strength, cardio, and recovery." />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                {days.map((day) => (
                  <th key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((slot) => (
                <tr key={slot.time}>
                  <td>{slot.time}</td>
                  {days.map((day) => (
                    <td key={`${slot.time}-${day}`}>{slot[day]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
