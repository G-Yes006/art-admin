import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
    CButton,
   CCard,
  CCardBody,
 
  CCardHeader,
  CCol,
 
  CRow,
   CSwitch
  
} from '@coreui/react'

const LmsSubjects = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Lms Subjects
            </CCardHeader>
		
		    <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/createsubject">Add LMS Subjects</CHeaderNavLink>
        </CHeaderNavItem>
		
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                  
                    <th className="text-center">Subject Name</th>
                   <th  className="text-center">Subject Descriptions</th>
                  
				     <th className="text-center">Course </th>
					  <th className="text-center">Subject Fee </th>
                   <th  className="text-center">Created By</th>
                   <th  className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                  
                    <td >
                  
                    </td>
                     <td >
               
                    </td>
                       	  <td >
               
                    </td>
                 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
					 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LmsSubjects
