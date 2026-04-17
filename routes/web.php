<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// Profil
Route::inertia('/profil/visi-misi', 'profil/visi-misi')->name('profil.visi-misi');
Route::inertia('/profil/struktur-organisasi', 'profil/struktur-organisasi')->name('profil.struktur');

// Sekolah
Route::inertia('/sekolah', 'sekolah/index')->name('sekolah.index');
Route::get('/sekolah/{slug}', function (string $slug) {
    return inertia('sekolah/show', ['slug' => $slug]);
})->name('sekolah.show');

// Artikel
Route::inertia('/artikel', 'artikel/index')->name('artikel.index');
Route::get('/artikel/{slug}', function (string $slug) {
    return inertia('artikel/show', ['slug' => $slug]);
})->name('artikel.show');

// Literasi
Route::inertia('/literasi', 'literasi/index')->name('literasi.index');
Route::get('/literasi/{id}/read', function (string $id) {
    return inertia('literasi/read', ['id' => $id]);
})->name('literasi.read');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

require __DIR__.'/settings.php';
