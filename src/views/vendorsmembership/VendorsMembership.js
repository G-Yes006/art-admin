import React from 'react'
import {
	
  CHeaderNavLink,
  
  CButton,
 
  CCard,
  CCardBody,
 
  CCardHeader,
  CCol,
 
  CRow,
   CSwitch,
   CFormGroup,
   CInputGroup,
   CLabel,
   CInput,
   CInputGroupAppend
 
} from '@coreui/react'

const VendorsMembership = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Manage Vendors Membership Payment
            </CCardHeader>
			
		   
            <CCardBody>
                 <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Search Vendor</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="8" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Go!</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Vendor</th>
                    <th >Amount</th>
                   <th >Upgraded Vender Package</th>
                  
                  
					<th >Status</th>
					<th ></th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                     Rs 2000.00
                    </td>
					 <td>
                    Premium
                    </td>
                                     
					<td>
					Due
					</td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 Edit / Delete
					</td>
                  </tr>
				  
				    <tr>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                     Rs 2500.00
                    </td>
					 <td>
                    Standard
                    </td>
                                     
					<td>
					Paid
					</td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 Edit / Delete
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

export default VendorsMembership
