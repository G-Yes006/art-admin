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

const ManageStaff = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Manage Staff/ Teachers/ Trainers
            </CCardHeader>
		
		    <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/createcourse">Add Staff</CHeaderNavLink>
        </CHeaderNavItem>
		
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                   
                   <th  className="text-center">Image</th>
                  
				     <th className="text-center">Name</th>
                   <th  className="text-center">Email Id</th>
                   <th  className="text-center">Phone</th>
				    <th className="text-center">Qualification</th>
                   <th  className="text-center">Course</th>
                   <th  className="text-center">Subject</th>
				   <th  className="text-center">Bank Info</th>
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
                 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
					 <td >
               <CHeaderNavLink to="/bankdetails">Bank Details</CHeaderNavLink>
                    </td>
                   <td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
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

export default ManageStaff
