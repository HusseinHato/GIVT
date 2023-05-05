<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Kampanye extends Model
{
    use HasFactory;
    use Sluggable;

    protected $guarded = [
        'id',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'judul'
            ]
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function posts(): HasMany
    {
        return $this->HasMany(Post::class);
    }

    public function donasis(): HasMany
    {
        return $this->hasMany(Donasi::class);
    }

    public function donasiKampanye(): BelongsToMany
    {
        return $this->belongsToMany(Kampanye::class, 'donasis')
            ->withPivot('jumlah')
            ->withTimestamps();
    }
}
