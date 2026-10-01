import React from "react";
import "./How_it_works.css";

const DetailSteps = () => {
  return (
    <div className="DetailSteps_main_container">
      <div
        className="text-center"
        style={{ marginBottom: "48px" }}
        //   style="margin-bottom:48px"
      >
        <div className="badge">📋 Step by Step</div>
        <h2 className="section-title">The Complete Process</h2>
      </div>
      <div className="big-steps">
        <div className="big-step">
          <div className="big-step-num">1</div>
          <div className="big-step-content">
            <h3>🛒 Order Your QR Tag</h3>
            <p>
              Choose the right tag for your need — car, bike, home, pet,
              keychain or more. Order online via our website or WhatsApp. We
              deliver anywhere in India in 1-5 days. Free shipping on orders
              above ₹599.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ 9 product types available</div>
              <div className="detail-chip">✓ Pan-India delivery</div>
              <div className="detail-chip">✓ UPI, GPay, COD accepted</div>
              <div className="detail-chip">✓ Bulk orders welcome</div>
            </div>
          </div>
        </div>
        <div className="big-step">
          <div className="big-step-num">2</div>
          <div className="big-step-content">
            <h3>📋 Register on Our Secure Portal</h3>
            <p>
              Every tag comes with a unique code. Visit qrpark.in/register,
              enter your code and fill in your details. You control exactly what
              information is shown to finders — your name, vehicle number,
              preferred contact method and emergency info.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ Takes only 5 minutes</div>
              <div className="detail-chip">✓ You decide what to show</div>
              <div className="detail-chip">✓ Update anytime, forever</div>
              <div className="detail-chip">✓ 12 language options</div>
            </div>
          </div>
        </div>
        <div className="big-step">
          <div className="big-step-num">3</div>
          <div className="big-step-content">
            <h3>📌 Apply the Tag / Sticker</h3>
            <p>
              Clean the surface and apply! Our 3M adhesive stickers stay put on
              windshields, mudguards, home doors and pet collars through Indian
              monsoons, summer heat (80°C) and daily wear. Takes 30 seconds to
              apply.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ 3M military-grade adhesive</div>
              <div className="detail-chip">✓ UV-resistant laminate</div>
              <div className="detail-chip">✓ Waterproof (monsoon tested)</div>
              <div className="detail-chip">✓ 5+ year lifespan</div>
            </div>
          </div>
        </div>
        <div className="big-step">
          <div className="big-step-num">4</div>
          <div className="big-step-content">
            <h3>📱 Anyone Scans Your QR</h3>
            <p>
              When someone needs to contact you — a security guard finding a
              wrongly parked car, a kind uncle who found your lost dog, a Swiggy
              delivery person at your door — they simply open their camera app
              and scan the QR code. No app needed. Works on any smartphone
              instantly.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ Any smartphone camera works</div>
              <div className="detail-chip">✓ No app download needed</div>
              <div className="detail-chip">✓ Works offline (basic mode)</div>
              <div className="detail-chip">✓ Opens instantly in browser</div>
            </div>
          </div>
        </div>
        <div className="big-step">
          <div className="big-step-num">5</div>
          <div className="big-step-content">
            <h3>🔔 You Get Instantly Notified</h3>
            <p>
              The moment someone scans your QR, you receive a WhatsApp message
              AND SMS with the scan location, time and device info. The finder
              sees your chosen contact options — masked call, WhatsApp, or
              emergency mode. Your phone number is NEVER shown.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ Instant WhatsApp + SMS alert</div>
              <div className="detail-chip">✓ Your number always masked</div>
              <div className="detail-chip">✓ Scan location & time logged</div>
              <div className="detail-chip">✓ You choose who can call</div>
            </div>
          </div>
        </div>
        <div className="big-step">
          <div className="big-step-num">✅</div>
          <div className="big-step-content">
            <h3>😊 Problem Solved!</h3>
            <p>
              Within minutes, wrong parking is sorted, lost pets are returned,
              deliveries are completed, and emergencies are handled. That's the
              QRPark magic — turning potential crises into simple, quick
              resolutions.
            </p>
            <div className="big-step-details">
              <div className="detail-chip">✓ Avg resolution: under 10 min</div>
              <div className="detail-chip">✓ 99% success rate</div>
              <div className="detail-chip">✓ Works 24×7×365</div>
              <div className="detail-chip">✓ No recurring cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSteps;
