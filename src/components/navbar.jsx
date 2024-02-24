'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';
import "../app/globals.css";

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

import { CiUser } from "react-icons/ci";
// import { FaUserCog } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


export default function NavbarHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, isLoading } = useUser();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className=''>
                <header className="main-header flex justify-end items-center">
                    <label htmlFor="btn-nav" className="btn-nav"><IoIosMenu /></label>
                    <input type="checkbox" id="btn-nav" />
                    <Nav className="mr-auto absolute left-[10%]" navbar data-testid="navbar-items">
                        <NavItem>
                            <PageLink 
                                href="/" 
                                className="nav-link text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" testId="navbar-home">
                                Home
                            </PageLink>
                        </NavItem>
                    </Nav>
                    <div className="relative -top-3" data-testid="navbar">
                        <Nav color="light" light expand="md">
                            {/* <Container> */}
                                <NavbarBrand className="logo" />
                                <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
                                <Collapse isOpen={isOpen} navbar>

                                    {/* <Nav className="d-none d-md-block" navbar>
                                        {!isLoading && !user && (
                                            <NavItem id="qsLoginBtn">
                                                <AnchorLink
                                                    href="/api/auth/login"
                                                    className="btn btn-primary btn-margin"
                                                    tabIndex={0}
                                                    testId="navbar-login-desktop">
                                                    Log in
                                                </AnchorLink>
                                            </NavItem>
                                        )}
                                        {user && (
                                            <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                                                <DropdownToggle nav caret id="profileDropDown">
                                                    <img
                                                        src={user.picture}
                                                        alt="Profile"
                                                        className="nav-user-profile rounded-circle"
                                                        width="50"
                                                        height="50"
                                                        decode="async"
                                                        data-testid="navbar-picture-desktop"
                                                    />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header data-testid="navbar-user-desktop">
                                                        {user.name}
                                                    </DropdownItem>
                                                    <DropdownItem className="dropdown-profile" tag="span">
                                                        <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                                                            Profile
                                                        </PageLink>
                                                    </DropdownItem>
                                                    <DropdownItem id="qsLogoutBtn">
                                                        <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                                                            Log out
                                                        </AnchorLink>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        )}
                                    </Nav> */}
                                    {!isLoading && !user && (
                                        <Nav className="" navbar>
                                            <AnchorLink
                                                href="/api/auth/login"
                                                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
                                                tabIndex={0}
                                                testId="navbar-login-mobile">
                                                <CiUser />Log in
                                            </AnchorLink>
                                        </Nav>
                                    )}
                                    {user && (
                                        <Nav
                                            id="nav-mobile"
                                            className="flex items-center"
                                            navbar
                                            data-testid="navbar-menu-mobile">
                                            <NavItem className='flex items-center '>
                                                    <img
                                                        src={user.picture}
                                                        alt="Profile"
                                                        className="nav-user-profile mr-1" style={{ borderRadius: '20%'}}
                                                        width="40"
                                                        height="40"
                                                        decode="async"
                                                        data-testid="navbar-picture-mobile"
                                                    />
                                                    <h6 className="inline-block text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-2 text-center me-2" data-testid="navbar-user-mobile">
                                                        {user.name}
                                                    </h6>
                                            </NavItem>
                                            <NavItem>
                                                <PageLink 
                                                    href="/profile" 
                                                    icon="user" 
                                                    testId="navbar-profile-mobile"
                                                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                                                    Profile
                                                </PageLink>
                                            </NavItem>
                                            <NavItem id="qsLogoutBtn">
                                                <AnchorLink
                                                    href="/api/auth/logout"
                                                    className="inline-block align-middle text-center border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 bg-transparent p-0"
                                                    icon="power-off"
                                                    testId="navbar-logout-mobile">
                                                    Log out
                                                </AnchorLink>
                                            </NavItem>
                                        </Nav>
                                    )}
                                </Collapse>
                            {/* </Container> */}
                        </Nav>
                    </div>
                    <nav>
                        <ul className="navigation">
                            <li><Link className='' href={'/'}>Vila Segura</Link></li>
                            <li><Link className='p-2' href={'/addTopic'}>Add House</Link></li>
                            <li><a href="">login</a></li>
                            <li><a href="">Contacto</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}