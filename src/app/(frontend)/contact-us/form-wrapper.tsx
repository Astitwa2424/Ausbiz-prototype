'use client'

import type React from 'react' // Import React
import styles from './styles.module.css'

export function FormWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.formWrapper}>{children}</div>
}
