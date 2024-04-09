import React from 'react'
import Section from '../Layouts/Section'

import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';

const teamMembers = [
    {
      id:'sdfsfsfsfw3432',
      name:'Full Name',
      desi:'Designation',
      facebook:'https://',
      instagram:'https://',
      x:'https://',
      img:team1
    },
    {
      id:'lfjsfksfksfhie39',
      name:'Full Name',
      desi:'Designation',
      facebook:'https://',
      instagram:'https://',
      x:'https://',
      img:team2
    },
    {
      id:'3sdjfksdfsfsd0dfs',
      name:'Full Name',
      desi:'Designation',
      facebook:'https://',
      instagram:'https://',
      x:'https://',
      img:team3
    },
    {
      id:'wrewr8wrejknsdfsfsf,mdf',
      name:'Full Name',
      desi:'Designation',
      facebook:'https://',
      instagram:'https://',
      x:'https://',
      img:team4
    }
]

const Team = () => {
  return (
    <Section heading={'Travel Guide'} subHeadig={'Meet Our Travel Guide'}>
      {
        teamMembers?.map(member=><SingleMember key={member?.id} member={member}/>)
      }
    </Section>
  )
}


const SingleMember = ({member})=>{
  return <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
  <div className="team-item bg-white mb-4">
    <div className="team-img position-relative overflow-hidden">
      <img className="img-fluid w-100" src={member?.img} alt={member?.name ?? 'Our Team Member'} />
      <div className="team-social">
        {member?.x && <a className="btn btn-outline-primary btn-square" href><i className="bi bi-twitter-x" /></a>}
        {member?.facebook && <a className="btn btn-outline-primary btn-square" href><i className="bi bi-facebook" /></a>}
        {member?.instagram && <a className="btn btn-outline-primary btn-square" href><i className="bi bi-instagram" /></a>}
      </div>
    </div>
    <div className="text-center py-4">
      <h5 className="text-truncate">Guide Name</h5>
      <p className="m-0">Designation</p>
    </div>
  </div>
</div>
}
export default Team