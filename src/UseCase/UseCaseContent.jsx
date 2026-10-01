import React from "react";
import "./UseCase.css";

const UseCaseContent = () => {
  return (
    <div className="UseCaseContent_conatiner">
      <div className="center">
        <div className="section-tag">Who Uses ParkQR</div>
        <h2 className="section-title">Perfect For Every Situation</h2>
        <p className="section-sub">
          Our customers span every walk of life — here are the most common use
          cases.
        </p>
      </div>
      <div className="usecases-grid fade-up">
        <div className="usecase-card">
          <div className="usecase-icon">🏢</div>
          <div className="usecase-title">Apartment Residents</div>
          <p className="usecase-desc">
            Quickly resolve blocked parking in your society without
            altercations.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🏥</div>
          <div className="usecase-title">Hospital Visitors</div>
          <p className="usecase-desc">
            Be reachable in emergencies without sharing personal numbers.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🏫</div>
          <div className="usecase-title">School Parents</div>
          <p className="usecase-desc">
            School vans tagged so parents and schools can always reach the
            driver.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🚕</div>
          <div className="usecase-title">Cab & Taxi Drivers</div>
          <p className="usecase-desc">
            Professional contact system that builds passenger trust and safety.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🏪</div>
          <div className="usecase-title">Shops & Markets</div>
          <p className="usecase-desc">
            Customers can quickly notify shop owners if they're blocking
            traffic.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🤝</div>
          <div className="usecase-title">Corporate Fleets</div>
          <p className="usecase-desc">
            Manage your entire vehicle fleet with one centralized dashboard.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🏍️</div>
          <div className="usecase-title">Solo Riders</div>
          <p className="usecase-desc">
            SOS feature is critical for motorcyclists riding alone on highways.
          </p>
        </div>
        <div className="usecase-card">
          <div className="usecase-icon">🛺</div>
          <div className="usecase-title">Auto & E-Rickshaw</div>
          <p className="usecase-desc">
            Passenger safety features and quick booking contact for drivers.
          </p>
        </div>
      </div>

      <div className="UseCaseContent_conatiner2">
        <div className="section-header center">
          <div className="section-tag">Real Scenarios</div>
          <h2 className="section-title">Problems ParkQR Solves Daily</h2>
        </div>
        <div className="fade-up usecaseconatinerdiv">
          <div className="usecaseconatinerdiv_card">
            <div className="usecaseconatinerdiv_card_seperate">😤</div>
            <h4 className="usecaseconatinerdiv_card_h4">Blocked Driveway</h4>
            <p className="usecaseconatinerdiv_card_p">
              Someone's car is blocking your exit at 7 AM. With ParkQR, one scan
              and a WhatsApp message later — the car moves in 5 minutes.
            </p>
          </div>
          <div className="usecaseconatinerdiv_card__div">
            <div className="usecaseconatinerdiv_card_seperate">😤</div>
            <h4 className="usecaseconatinerdiv_card_h4">Road Accident</h4>
            <p className="usecaseconatinerdiv_card_p">
              A bystander scans your bike's QR tag after an accident. Family is
              notified, blood type is visible, ambulance is called — all in
              seconds.
            </p>
          </div>
          <div usecaseconatinerdiv_card>
            <div className="usecaseconatinerdiv_card_seperate">💡</div>
            <h4 className="usecaseconatinerdiv_card_h4">Headlights Left On</h4>
            <p className="usecaseconatinerdiv_card_p">
              Someone notices your headlights are on in a parking lot. They scan
              your QR and send a quick WhatsApp — you save your battery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseContent;
