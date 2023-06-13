<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Carbon\Carbon;
use Illuminate\Support\Str;

class Post extends Model
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

    public function kampanye(): BelongsTo
    {
        return $this->belongsTo(Kampanye::class);
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class);
    }

    public function createExcerpt($content, $length) {
        // Strip all HTML tags
        $content = preg_replace('/(&nbsp;|<[^>]+>|[\x00-\x1F\x7F-\xFF])/u', ' ', strip_tags($content));

        // Limit the excerpt to the specified length
        $excerpt = Str::limit($content, $length);

        return $excerpt;
    }

}
