/**
 * 定义全局通用类型
 */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export interface Props {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string; 
}

export interface RoutedProp extends Props, RouteComponentProps {}