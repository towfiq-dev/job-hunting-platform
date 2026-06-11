// 'use server'

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// export const createCompany = async (newCompanyData) => {
//   const res = await fetch(`${baseUrl}/api/companies`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(newCompanyData)
//   })
//   return res.json()
// }

'use server'

import { serverMutation } from "../core/server";

export const createCompany = async (newCompanyData) => {
    return serverMutation('/api/companies', newCompanyData);
}

export const updateCompany = async (id, data) => {
    const result = serverMutation(`/api/companies/${id}`, data, 'PATCH');
    revalidatePath('/allRoute/dashboard/admin/companies');
    return result;
}
