import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar'
import { PrismaClient } from '@prisma/client'
import {prisma} from '../../server/db/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter';




export async function getServerSideProps() {
  const reports = await prisma.report.findMany();
  return {
    props: {
      initialReports: reports
    }
  }
}

export default function Home(props) {
  const [reports, setReports] = useState(props.initialReports)
  return (
    <>
      <Navbar></Navbar>
      <MainContainer
      reports={reports}
      setReports={setReports}>
      </MainContainer>
    </>
  )
}
