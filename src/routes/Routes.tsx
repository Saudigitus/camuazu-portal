import { Route, Routes } from "react-router";
import { AboutPage, Contacts, Home, NotFoundPage, Services } from '@/pages';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contactos" element={<Contacts />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}