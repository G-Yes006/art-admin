import React from 'react'
import {
  
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  
  
  CCol,
  CRow
  
  
} from  '@coreui/react'


const SystemConfig = () => {
 
  return (
    <>
     
     
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/companyprofile">Company Profile</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/bankdetails">Bank Details Setting</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/fiscalyears">Fiscal Years</CHeaderNavLink>   
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
     
      <CRow>
	  
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/socialmedia">Social Medias</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
		
		
      </CRow>
     
    </>
  )
}

export default SystemConfig
