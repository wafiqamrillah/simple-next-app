// pages/profile.js
export default function Profile() {
    return (
        <div className="flex flex-auto flex-col gap-3 items-center p-6 md:p-20 lg:p-32">
            <div className="flex items-center justify-between w-full">
                <div className="bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30">
                    <h1>Halaman Profil Saya</h1>
                </div>
            </div>
            <div className="w-full bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30">
                <p>
                    Halo! Ini adalah halaman profil saya.
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
                                Domisili
                            </th>
                            <td>:</td>
                            <td className="">
                                Bekasi, Jawa Barat
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left">
                                Profesi
                            </th>
                            <td>:</td>
                            <td className="">
                                Karyawan Swasta / Mahasiswa
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};