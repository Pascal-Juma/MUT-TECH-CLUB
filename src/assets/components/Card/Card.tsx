import React from 'react';
import './Card.css'

type cardProps = {
    profile: string;
    socialsf: React.ReactNode;
    socialsx: React.ReactNode;
    socialsl: React.ReactNode;
    lead: string;
    specialty: string;
    biography: string;
    responsibilities: string;
    web ?: string;
    tool ?: React.ReactNode;
    app ?: string;
    android ?: React.ReactNode;
    platform ?: string;
    cross ?: React.ReactNode;
    security ?: string;
    padlock ?: React.ReactNode;
    cloud ?: string;
    storage ?: React.ReactNode;
    ui ?: string;
    ux ?: React.ReactNode;
}
function Card({profile, socialsf, socialsx, socialsl, lead, specialty, biography, responsibilities, web, tool, app, android, platform, cross, security, padlock, cloud, storage, ui, ux}: cardProps) {
  return (
    <>
      <section className="card-section">
        <div className="profile-container">
            <img src={profile} alt="profile picture"/>
            <div className="socials-container">
            <p className="leader-socials"><a href="#" rel="noopener noreferrer">{socialsf}</a>
            <a href="#" rel="noopener noreferrer">{socialsx}</a>
            <a href="#" rel="noopener noreferrer">{socialsl}</a></p>
            </div>
        </div>
        <div className="leader-details">
            <h3 className="leader-name">
                {lead}
            </h3>
            <div className="lead-role">
                <p className="lead-paragragh">
                    {specialty}
                </p>
            </div>
            <h4 className="biography-intro">
                About Me
            </h4>
            <div className="lead-biography">
                <p className="biography-message">
                    {biography}
                </p>
            </div>
            <div className="lead-biography-more">
                <p className="biography-more">
                    {responsibilities}
                </p>
            </div>
            <h4 className="lead-technologies">
                Technologies
            </h4>
            <div className="technologies-listing">
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {web}{tool}
                    </p>
                </div>
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {app}{android}
                    </p>
                </div>
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {platform}{cross}
                    </p>
                </div>
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {security}{padlock}
                    </p>
                </div>
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {cloud}{storage}
                    </p>
                </div>
                <div className="tech-tools">
                    <p className="tech-paragragh">
                        {ui}{ux}
                    </p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Card
