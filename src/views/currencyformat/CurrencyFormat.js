import React, { lazy } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
   CSwitch,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const CurrencyFormat = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Currency Format
            </CCardHeader>
			
		   
            <CCardBody>
                <CCardHeader>
		        
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addnewformat">+Add New Format</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
			  
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Code</th>
                    <th> Name</th>
                    
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                     INR 00.00
                     
                    </td>
					
                   
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    ? 00.00
                     
                    </td>
					
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				     <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    INR? 00.00
                     
                    </td>
					
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    INR 00.0
                     
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

export default CurrencyFormat
