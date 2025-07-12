'use client';

import Link from "next/link";

export default function Profile() {
    return (
        <div className="flex flex-auto flex-col gap-3 items-center p-6 md:p-20 lg:p-32">
            <div className="flex items-center justify-between w-full">
                <div className="bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30">
                    <h1>Kontak Kami</h1>
                </div>
            </div>
            <div className="w-full bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30">
                <p>
                    Hubungi kami melalui informasi berikut:
                </p>

                <table className="w-full table">
                    <tbody>
                        <tr>
                            <th className="text-left w-1/4">
                                Nama
                            </th>
                            <td>:</td>
                            <td>
                                Ahmad Wafiq Amrillah
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left">
                                Nomor HP
                            </th>
                            <td>:</td>
                            <td className="">
                                0877-7615-9513
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left">
                                Email
                            </th>
                            <td>:</td>
                            <td className="">
                                wafiqamrillah@hotmail.com
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left">
                                Github
                            </th>
                            <td>:</td>
                            <td className="">
                                <Link href="http://github.com/wafiqamrillah" target="_blank" rel="noopener noreferrer">
                                    @wafiqamrillah
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};