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

const LmsCourses = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            LmsCourses
            </CCardHeader>
		
		    <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/createcourse">Add LMS Courses</CHeaderNavLink>
        </CHeaderNavItem>
		
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                   
                    <th className="text-center">Course Name</th>
                   <th  className="text-center">Course Descriptions</th>
                  
				     <th className="text-center">Course Fee</th>
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

export default LmsCourses
