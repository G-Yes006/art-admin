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

const ManageBatches = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
           Manage Batches
            </CCardHeader>
		
		    <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/">Add Students</CHeaderNavLink>
        </CHeaderNavItem>
		
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                   
                    <th className="text-center">Batch Name</th>
                   <th  className="text-center">Batch Strength</th>
                  
				     <th className="text-center">Total Capacity</th>
                   <th  className="text-center">Cousres </th>
				     <th  className="text-center">Subjects </th>
                   <th  className="text-center">Batch Month </th>
				     <th  className="text-center">Batch Year </th>
				     <th className="text-center">Date Of Birth</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                     <td >
               
                    </td>  <td >
               
                    </td>  <td >
               
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

export default ManageBatches
