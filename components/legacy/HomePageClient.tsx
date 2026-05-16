"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { classHighlights, galleryItems, coaches, programPillars, siteConfig, whyChooseUs } from "@/data/siteContent";
import { Hero } from "@/components/features/home/Hero";

const classIcons = [
  "/images/gallery-boxing.jpg",
  "/images/service-support.jpg",
  "/images/gallery-cardio.jpg",
  "/images/gallery-team.jpg",
  "/images/hero-cycling.jpg",
  "/images/gallery-running.jpg"
];

const timetableRows = [
  {
    time: "10.00",
    monday: { title: "Gym", className: "gym", span: "10.00 - 11.00", trainer: "Coach Brian" },
    tuesday: null,
    wednesday: { title: "Yoga", className: "yoga", span: "10.00 - 12.00", trainer: "Coach Ruth" },
    thursday: null,
    friday: { title: "Body", className: "body", span: "10.00 - 12.00", trainer: "Coach Kevin" },
    saturday: null,
    sunday: { title: "Cardio", className: "cardio", span: "10.00 - 11.00", trainer: "Coach Abby" }
  },
  {
    time: "14.00",
    monday: null,
    tuesday: { title: "Running", className: "running", span: "14.00 - 16.00", trainer: "Coach Ruth" },
    wednesday: null,
    thursday: { title: "Box", className: "box", span: "14.00 - 15.00", trainer: "Coach Brian" },
    friday: null,
    saturday: { title: "Gym", className: "gym", span: "14.00 - 16.00", trainer: "Coach Kevin" },
    sunday: null
  },
  {
    time: "16.00",
    monday: { title: "Cardio", className: "cardio", span: "16.00 - 18.00", trainer: "Coach Abby" },
    tuesday: null,
    wednesday: { title: "Gym", className: "gym", span: "16.00 - 19.00", trainer: "Coach Brian" },
    thursday: null,
    friday: { title: "Yoga", className: "yoga", span: "16.00 - 18.00", trainer: "Coach Ruth" },
    saturday: null,
    sunday: { title: "Gym", className: "gym", span: "16.00 - 20.00", trainer: "Coach Kevin" }
  },
  {
    time: "18.00",
    monday: { title: "Box", className: "box", span: "18.00 - 22.00", trainer: "Coach Brian" },
    tuesday: { title: "Body", className: "body", span: "18.00 - 20.00", trainer: "Coach Kevin" },
    wednesday: null,
    thursday: { title: "Swimming", className: "swimming", span: "18.00 - 21.00", trainer: "Coach Abby" },
    friday: null,
    saturday: { title: "Cardio", className: "cardio", span: "18.00 - 22.00", trainer: "Coach Ruth" },
    sunday: null
  },
  {
    time: "20.00",
    monday: null,
    tuesday: { title: "Gym", className: "gym", span: "20.00 - 22.00", trainer: "Coach Brian" },
    wednesday: { title: "Body", className: "body", span: "20.00 - 21.00", trainer: "Coach Kevin" },
    thursday: null,
    friday: { title: "Cardio", className: "cardio", span: "20.00 - 22.00", trainer: "Coach Ruth" },
    saturday: null,
    sunday: { title: "Swimming", className: "swimming", span: "20.00 - 21.00", trainer: "Coach Abby" }
  }
];

const dayKeys = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" }
] as const;

function renderSlot(
  slot:
    | {
        title: string;
        className: string;
        span: string;
        trainer: string;
      }
    | null,
  day: string
) {
  if (!slot) {
    return <td data-day={day}></td>;
  }

  return (
    <td className={`${slot.className} ts-item`} data-day={day}>
      <h6>{slot.title}</h6>
      <span>{slot.span}</span>
      <div className="trainer-name">{slot.trainer}</div>
    </td>
  );
}

export function HomePageClient() {

  return (
    <>
      <Header />

      <Hero />

      <section className="dishes">
        <div className="title">
          <h1>Why Members Choose Zelha</h1>
          <p>Coach-led programs, modern equipment, and a local community that helps you keep progress.</p>
        </div>
        <div className="wrapper">
          {whyChooseUs.map((item) => (
            <div className="card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div className="info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link href="/about" className="btn">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="Classes">
        <h1>Our Classes</h1>
        <p>Zelha Spin & Fitness classes in Juja are designed for real progress and long-term consistency.</p>
        <div className="cen">
          {classHighlights.map((item, index) => (
            <div className="Classe" key={item.title}>
              <img
                src={classIcons[index] ?? "/images/cycling.png"}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/classes" className="btn">
          Read more
        </Link>
      </div>

      <div className="offer_area offer_bg">
        <div className="container3">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="offer_text">
                <h4>
                  Student Membership Offer
                  <br />
                  in Juja
                </h4>
                <h3>KSh 2,000</h3>
                <p>
                  Affordable student-friendly fitness access for spinning, cardio, and strength training.
                </p>
                <Link href="/pricing" className="offer-btn">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="program-section">
        <div className="program-title set-bg">
          <div className="containerr">
            <div className="row">
              <div className="col-lg-7 m-auto text-center">
                <div className="section-title">
                  <h2>Choose Your Program</h2>
                  <p>
                    Our coaches help you discover dynamic training techniques for a complete full-body
                    workout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Programs">
          <div className="max-width">
            <div className="contents">
              {programPillars.map((item, index) => (
                <div className="p-card" key={item.title}>
                  <div className="box">
                    <i
                      className={`fa ${
                        index === 0
                          ? "fa-dumbbell"
                          : index === 1
                            ? "fa-heart-pulse"
                            : index === 2
                              ? "fa-bicycle"
                              : "fa-person-running"
                      }`}
                    ></i>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trainer-schedule class-timetable spad">
        <div className="container5">
          <div className="rowss">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Class Timetable</h2>
              </div>
            </div>
          </div>
          <div className="rowss">
            <div className="col-lg-12">
              <div className="schedule-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableRows.map((row) => (
                      <tr key={row.time}>
                        <td className="workout-time">{row.time}</td>
                        {renderSlot(row.monday, "Monday")}
                        {renderSlot(row.tuesday, "Tuesday")}
                        {renderSlot(row.wednesday, "Wednesday")}
                        {renderSlot(row.thursday, "Thursday")}
                        {renderSlot(row.friday, "Friday")}
                        {renderSlot(row.saturday, "Saturday")}
                        {renderSlot(row.sunday, "Sunday")}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mobile-schedule-cards">
                {timetableRows.map((row) => (
                  <article className="mobile-schedule-card" key={`mobile-${row.time}`}>
                    <h3>{row.time}</h3>
                    <ul>
                      {dayKeys.map((day) => {
                        const slot = row[day.key];
                        if (!slot) {
                          return null;
                        }

                        return (
                          <li key={`${row.time}-${day.key}`} className={slot.className}>
                            <p className="day">{day.label}</p>
                            <p className="title">{slot.title}</p>
                            <p className="time">{slot.span}</p>
                            <p className="coach">{slot.trainer}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Building Your Body with Professional Zelha Coaches</h2>
        <p>
          Find us in {siteConfig.location}, {siteConfig.landmark}. Build consistency with the Zelha
          fitness community.
        </p>
        <Link href="/about" className="primary-btn">
          More about us
        </Link>
      </section>

      <section className="gallery">
        <div className="gallery-title">
          <h2>Our Gallery</h2>
        </div>
        <div className="image-gallery">
          {galleryItems.map((item) => (
            <div className="image-box" key={item.label}>
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                decoding="async"
              />
              <div className="overlay">
                <div className="details">
                  <h3 className="title">
                    <Link href="/classes">{item.label}</Link>
                  </h3>
                  <span className="category">
                    <Link href="/contact">click for more details</Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="coaches-section">
        <div className="title">
          <h1>Meet Our Coaches</h1>
          <p>Friendly trainers who help you stay consistent, safe, and motivated.</p>
        </div>
        <div className="coaches-grid">
          {coaches.map((coach) => (
            <article className="coach-card" key={coach.name}>
              <img src={coach.image} alt={coach.name} loading="lazy" decoding="async" />
              <div className="coach-card__body">
                <h3>{coach.name}</h3>
                <p>{coach.role}</p>
                <Link href="/contact" className="btn">
                  Train with us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
