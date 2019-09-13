import React, { Component } from 'react';

class DetailRecruitment extends Component {
    render() {
        return (
            <div id="recruitment-detail">
               <section  style={{backgroundColor:'rgba(0,0,0,0.3)'}}  className="asset-section p-section-top p-md-5">
  <div className="asset-section__container">
    <div  style={{backgroundColor:'rgb(235, 233, 230)'}} className="container">
      <div className="recruitment-detail__header pb-5 d-flex justify-content-center flex-column align-items-center">
        <div className="recruitment-detail__header-job-name">
          CEO ASSISTANT
        </div>
        <div className="recruitment-detail__header-underline" />
      </div>
      <div className="recruitment-detail-content">
        <img className="w-25 working-daily" src="/resources/tuyendung/ceoassisstant.png" alt="" />
        <span className="recruitment-detail-content__full-info-job">
          <div className="recruitment-detail-content__title-section">Job description:</div>
          <span className="recruitment-detail-content__description">
            <br />
            - Assisting the Executive Director as an online operator
            with all day-to-day issues including preparing and
            coordinating communications and managing complex
            calendars with a constantly changing schedule.
            <br /><br />
            - Spearhead interacts with senior management and
            important executive groups (reporting directly to the
            CEO) to track special projects and initiatives.
            <br /><br />
            - Pro-actively can manage and prioritize access to the CEO with grace and diplomacy;
            responsible for his calendar.
            <br /><br />
            - Traveling with CEO, when necessary especially scheduled council meetings.
            Planning as required by the CEO.
            <br /><br />
          </span>
        </span>
        <span className="recruitment-detail-content__full-info-job">
          <div className="recruitment-detail-content__title-section">About you:</div>
          <span className="recruitment-detail-content__description">
            <br />
            A minimum of 03 years of experience as a Assistant supporting a Chairman or CEO.
            Bachelor’s Degree from accredited College/University.
            <br />
            Ability to deal with high level executives and manage those relationships with grace and
            polished acumen.
            <br />
            Very organized, detail-oriented and “thick skinned”.
            <br /><br />
          </span>
        </span>
        <span className="recruitment-detail-content__full-info-job">
          <div className="recruitment-detail-content__title-section">What we offer:</div>
          <span className="recruitment-detail-content__description">
            <br />
            Salary: $500 to $650.
            <br />
            Full - time.
            <br />
            Health insurance.
            <br />
            Bonus.
            <br /><br />
          </span>
        </span>
        <span className="recruitment-detail-content__full-info-job">
          <div className="recruitment-detail-content__title-section">Our contact:</div>
          <span className="recruitment-detail-content__description">
            <br />
            Address: 216 Nguyen Hoang St., An Phu Ward, Dist. 2, HCMC.
            <br />
            Email: hr@asset.vn (Ms. Thủy).
          </span>
        </span>
      </div>
    </div>
  </div>
</section>

            </div>
        );
    }
}

export default DetailRecruitment;