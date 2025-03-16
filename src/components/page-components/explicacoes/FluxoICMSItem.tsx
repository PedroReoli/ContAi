import type React from "react"
import { cn } from "@/lib/utils"

interface FluxoICMSItemProps {
  title: string
  valor: number
  aliquota: number
  icmsRecolhido: number
  icmsCredito: number
  icmsAPagar: number
  icmsST?: number
  icmsDiferido?: number
  isConsumidor?: boolean
  isSubstituto?: boolean
  isSubstituido?: boolean
  isDiferido?: boolean
  isResponsavelDiferido?: boolean
}

const FluxoICMSItem: React.FC<FluxoICMSItemProps> = ({
  title,
  valor,
  aliquota,
  icmsRecolhido,
  icmsCredito,
  icmsAPagar,
  icmsST,
  icmsDiferido,
  isConsumidor,
  isSubstituto,
  isSubstituido,
  isDiferido,
  isResponsavelDiferido,
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-bg-darker border border-bg-medium/30 dark:border-bg-dark/50 rounded-xl p-5 w-full md:w-64 text-center shadow-lg transition-all hover:shadow-xl",
        isConsumidor && "bg-bg-medium/30 dark:bg-bg-dark/30",
        isSubstituto && "ring-2 ring-primary dark:ring-secondary",
        isSubstituido && "ring-2 ring-secondary dark:ring-secondary/70",
        isDiferido && "border-dashed ring-2 ring-primary dark:ring-secondary",
        isResponsavelDiferido && "ring-2 ring-primary dark:ring-secondary",
      )}
    >
      <h4 className="font-semibold text-lg mb-3 text-txt-primary dark:text-txt-light">{title}</h4>
      <div className="space-y-2 text-sm">
        <p className="text-txt-secondary dark:text-txt-muted">
          Valor: <span className="font-medium text-txt-primary dark:text-txt-light">R$ {valor.toFixed(2)}</span>
        </p>
        {!isConsumidor && (
          <>
            <p className="text-txt-secondary dark:text-txt-muted">
              Alíquota: <span className="font-medium text-txt-primary dark:text-txt-light">{aliquota}%</span>
            </p>
            <p className="text-txt-secondary dark:text-txt-muted">
              ICMS Débito:{" "}
              <span className="font-medium text-txt-primary dark:text-txt-light">R$ {icmsRecolhido.toFixed(2)}</span>
            </p>
            <p className="text-txt-secondary dark:text-txt-muted">
              ICMS Crédito:{" "}
              <span className="font-medium text-txt-primary dark:text-txt-light">R$ {icmsCredito.toFixed(2)}</span>
            </p>
            <div className="mt-3 pt-3 border-t border-bg-medium/30 dark:border-bg-dark/50">
              <p className="text-txt-secondary dark:text-txt-muted font-medium">
                ICMS a Pagar:{" "}
                <span className="font-bold text-primary dark:text-secondary">R$ {icmsAPagar.toFixed(2)}</span>
              </p>
            </div>

            {isSubstituto && icmsST && (
              <div className="mt-2 p-2 bg-primary/10 dark:bg-secondary/10 rounded-lg">
                <p className="text-primary dark:text-secondary font-medium">ICMS-ST: R$ {icmsST.toFixed(2)}</p>
              </div>
            )}

            {isSubstituido && (
              <div className="mt-2 p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
                <p className="text-secondary dark:text-secondary/80 font-medium">ICMS já recolhido por ST</p>
              </div>
            )}

            {isDiferido && (
              <div className="mt-2 p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <p className="text-primary dark:text-secondary font-medium">
                  ICMS Diferido: R$ {((valor * aliquota) / 100).toFixed(2)}
                </p>
              </div>
            )}

            {isResponsavelDiferido && icmsDiferido && (
              <div className="mt-2 p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <p className="text-primary dark:text-secondary font-medium">
                  ICMS Diferido: R$ {icmsDiferido.toFixed(2)}
                </p>
              </div>
            )}
          </>
        )}

        {isConsumidor && (
          <div className="mt-2 p-2 bg-bg-medium/30 dark:bg-bg-dark/30 rounded-lg">
            <p className="text-txt-muted dark:text-txt-muted">Consumidor final arca com todo o ICMS</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FluxoICMSItem

