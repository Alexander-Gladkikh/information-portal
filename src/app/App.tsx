import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                {/* eslint-disable-next-line i18next/no-literal-string,react/button-has-type */}
                <button onClick={() => setIsOpen(true)}>toggle</button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis minima, nisi perspiciatis quisquam repellendus sed. Autem eligendi fugiat totam?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
