<?php
namespace App\Repository;

use App\Model\DocumentHistory;
use App\Repository\Interfaces\DocumentHistoryRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;

class DocumentHistoryRepository extends Repository implements DocumentHistoryRepositoryInterface
{
    public function model()
    {
        return DocumentHistory::class;
    }
}
