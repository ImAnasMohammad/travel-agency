import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../components/Banner'
import Section from '../Layouts/Section'
import img from '../assets/images/contact-us.jpg'
import ContactUsForm from '../Forms/ContactUsForm'
const ContactUs = () => {
  return (
    <Layout>
      <Banner text={'Contact with us ...!'} src={img}/>
      <Section heading={'Contact us'} subHeadig={'Contact For Any Query'}>
        <ContactUsForm/>
      </Section>
    </Layout>
  )
}

export default ContactUs