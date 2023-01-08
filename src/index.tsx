import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Root from 'routes/root'
import ClassesPage from 'routes/classes/ClassesPage'
import SchoolsListPage from 'routes/schools/SchoolsListPage'
import AddSchoolPage from 'routes/school/AddSchoolPage'
import SchoolAboutPage from 'routes/school/SchoolAboutPage'
import HomePage from 'routes/home/HomePage'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'escolas/',
        element: <SchoolsListPage />
      },
      {
        path: 'escola/adicionar',
        element: <AddSchoolPage />
      },
      {
        path: 'escola/:id',
        element: <SchoolAboutPage />
      },
      {
        path: 'turmas/',
        element: <ClassesPage />
      },
      {
        path: 'turma/adicionar',
        element: <p>Adicionar</p>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
